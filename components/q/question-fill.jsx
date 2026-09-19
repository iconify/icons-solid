import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zku8iz88p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zku8iz88p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:question-fill"} {...others} />);
}

export default Component;
