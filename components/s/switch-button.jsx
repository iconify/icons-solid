import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/b/bm5v79neo.css';
import '../../css/q/qy7fhdaaz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQAw03bSJ"><g class="ylrso7y3c"><path class="bm5v79neo"/><path class="qy7fhdaaz"/></g></mask></defs><path mask="url(#SVGQAw03bSJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:switch-button"} {...others} />);
}

export default Component;
