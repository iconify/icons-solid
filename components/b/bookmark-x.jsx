import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbez4kq0u.css';
import '../../css/g/gfk4z3biw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qbez4kq0u"/><path class="gfk4z3biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bookmark-x"} {...others} />);
}

export default Component;
