import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njrjhmbcz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="njrjhmbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:shield-slash-fill"} {...others} />);
}

export default Component;
