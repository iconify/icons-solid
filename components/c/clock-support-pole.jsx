import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plml1nb5a.css';
import '../../css/c/c3skeypjt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="plml1nb5a"/><path class="c3skeypjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:clock-support-pole"} {...others} />);
}

export default Component;
