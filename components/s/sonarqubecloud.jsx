import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coc-1sbkx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coc-1sbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:sonarqubecloud"} {...others} />);
}

export default Component;
