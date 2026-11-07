import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8fbprehd.css';
import '../../css/u/u_bgapr5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z8fbprehd"/><path clip-rule="evenodd" class="u_bgapr5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-cog-bold"} {...others} />);
}

export default Component;
