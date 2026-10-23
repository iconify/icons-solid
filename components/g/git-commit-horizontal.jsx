import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb1v_judf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb1v_judf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:git-commit-horizontal"} {...others} />);
}

export default Component;
