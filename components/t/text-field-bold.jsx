import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d37n69bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d37n69bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-bold"} {...others} />);
}

export default Component;
