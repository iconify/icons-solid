import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/syy6vlbtq.css';

const viewBox = {"width":486.037,"height":1000};
const content = `<path class="syy6vlbtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:facebook"} {...others} />);
}

export default Component;
