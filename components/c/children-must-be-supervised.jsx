import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjs2h1e2y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jjs2h1e2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:children-must-be-supervised"} {...others} />);
}

export default Component;
