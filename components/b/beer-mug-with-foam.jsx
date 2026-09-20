import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8iyr9bqk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n8iyr9bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:beer-mug-with-foam"} {...others} />);
}

export default Component;
