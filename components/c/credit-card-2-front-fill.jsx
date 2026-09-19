import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqy0fzbvu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sqy0fzbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:credit-card-2-front-fill"} {...others} />);
}

export default Component;
