import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jor-usn7v.css';
import '../../css/t/t7w3f5b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b jor-usn7v"/><path class="b t7w3f5b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:background-color-fill"} {...others} />);
}

export default Component;
