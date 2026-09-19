import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/y/yzgcxqb4r.css';
import '../../css/v/v57r1kbjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlUt0ucDS"><g class="ylrso7y3c"><path class="yzgcxqb4r"/><path class="v57r1kbjg"/></g></mask></defs><path mask="url(#SVGlUt0ucDS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:local-two"} {...others} />);
}

export default Component;
