import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6re6y22q.css';
import '../../css/a/ak63jmbgk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t6re6y22q"/><path class="ak63jmbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-fill"} {...others} />);
}

export default Component;
