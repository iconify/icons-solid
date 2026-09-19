import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hydl6x73v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="hydl6x73v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:percentage-outlined"} {...others} />);
}

export default Component;
