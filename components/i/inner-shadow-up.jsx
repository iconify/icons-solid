import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/n/ngt05uq9h.css';
import '../../css/f/fwohfu3-q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrTRund7K"><g class="gopnm44um"><path clip-rule="evenodd" class="ngt05uq9h"/><path class="fwohfu3-q"/></g></mask></defs><path mask="url(#SVGrTRund7K)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:inner-shadow-up"} {...others} />);
}

export default Component;
