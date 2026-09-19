import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft6y81b-e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ft6y81b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pic-left-outlined"} {...others} />);
}

export default Component;
