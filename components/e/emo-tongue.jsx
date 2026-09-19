import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqr1u1-go.css';

const viewBox = {"width":824,"height":1000};
const content = `<path class="pqr1u1-go"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:emo-tongue"} {...others} />);
}

export default Component;
