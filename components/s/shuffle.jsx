import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk9fdi05w.css';
import '../../css/e/exaqnd3xk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uk9fdi05w"/><path class="exaqnd3xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:shuffle"} {...others} />);
}

export default Component;
