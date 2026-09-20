import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx9oalqzz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wx9oalqzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-slipping-on-steps"} {...others} />);
}

export default Component;
