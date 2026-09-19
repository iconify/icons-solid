import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esgkqxb0k.css';
import '../../css/a/a6gnopb9u.css';
import '../../css/k/kxjzoigpa.css';
import '../../css/v/v3ufwzb3s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="esgkqxb0k"/><path class="a6gnopb9u"/><path class="kxjzoigpa"/><path class="v3ufwzb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:car-twotone"} {...others} />);
}

export default Component;
