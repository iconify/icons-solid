import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgqc87buj.css';
import '../../css/h/h7n74xhqs.css';
import '../../css/t/tcsfno7wt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrNNsNeBC"><g class="ft5dv1b6b"><path class="dgqc87buj"/><path class="h7n74xhqs"/><path clip-rule="evenodd" class="tcsfno7wt"/></g></mask></defs><path mask="url(#SVGrNNsNeBC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:helpcenter"} {...others} />);
}

export default Component;
