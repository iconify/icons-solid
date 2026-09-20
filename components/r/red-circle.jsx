import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2dutkr2l.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="u2dutkr2l"/><circle class="snpiwsb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-circle"} {...others} />);
}

export default Component;
