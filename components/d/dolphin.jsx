import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x65kp3cdr.css';
import '../../css/s/sg6tecbtd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIDphUdDF"><g class="ft5dv1b6b"><path class="x65kp3cdr"/><circle class="sg6tecbtd"/></g></mask></defs><path mask="url(#SVGIDphUdDF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:dolphin"} {...others} />);
}

export default Component;
