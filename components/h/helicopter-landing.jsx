import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h00kpe59f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h00kpe59f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:helicopter-landing"} {...others} />);
}

export default Component;
