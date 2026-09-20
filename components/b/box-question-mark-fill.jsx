import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a22dcsy8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a22dcsy8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-question-mark-fill"} {...others} />);
}

export default Component;
