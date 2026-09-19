import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbvjsy3py.css';
import '../../css/i/iun2kcife.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tbvjsy3py"/><path class="iun2kcife"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:bug-filled"} {...others} />);
}

export default Component;
