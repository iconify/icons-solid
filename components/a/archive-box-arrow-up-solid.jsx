import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkhmj7e-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pkhmj7e-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:archive-box-arrow-up-solid"} {...others} />);
}

export default Component;
