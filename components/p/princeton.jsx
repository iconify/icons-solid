import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9rvihb5y.css';
import '../../css/t/tr21_z34u.css';
import '../../css/f/fijnidtww.css';

const viewBox = {"width":89.541,"height":102.594};
const content = `<path class="v9rvihb5y"/><path class="tr21_z34u"/><path class="fijnidtww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:princeton"} {...others} />);
}

export default Component;
