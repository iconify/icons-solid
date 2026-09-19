import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7sfqwk7v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b7sfqwk7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:flag-fill"} {...others} />);
}

export default Component;
