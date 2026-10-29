import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h83a2chhh.css';
import '../../css/o/oncz_d6_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h83a2chhh"/><path class="oncz_d6_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tag"} {...others} />);
}

export default Component;
