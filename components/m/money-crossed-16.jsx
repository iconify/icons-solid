import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6ja28kow.css';
import '../../css/q/q6as41mwh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z6ja28kow"/><path clip-rule="evenodd" class="q6as41mwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:money-crossed-16"} {...others} />);
}

export default Component;
