import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wr9ril5is.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wr9ril5is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:recurring-payment"} {...others} />);
}

export default Component;
