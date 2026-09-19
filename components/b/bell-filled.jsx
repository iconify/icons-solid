import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u3iaynbsh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="u3iaynbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bell-filled"} {...others} />);
}

export default Component;
