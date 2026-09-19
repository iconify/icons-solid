import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6d9bfo-j.css';
import '../../css/e/ezjzxdbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6d9bfo-j"/><path class="ezjzxdbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-spreadsheet"} {...others} />);
}

export default Component;
