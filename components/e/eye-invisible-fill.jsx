import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqys2lycf.css';
import '../../css/u/u_u3qq80h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pqys2lycf"/><path class="u_u3qq80h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:eye-invisible-fill"} {...others} />);
}

export default Component;
