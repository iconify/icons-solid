import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/v/vflph64cl.css';
import '../../css/x/x-37y-4zn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="vflph64cl"/><path class="x-37y-4zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:day-cloud-1"} {...others} />);
}

export default Component;
