import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuxb0ab8w.css';
import '../../css/o/o96_dt2bo.css';

const viewBox = {"width":16,"height":16};
const content = `<circle class="uuxb0ab8w"/><path class="o96_dt2bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:sun-fill-16"} {...others} />);
}

export default Component;
