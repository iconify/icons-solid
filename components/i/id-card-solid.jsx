import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go-f_ehsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="go-f_ehsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:id-card-solid"} {...others} />);
}

export default Component;
