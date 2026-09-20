import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h40madbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h40madbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pen-square"} {...others} />);
}

export default Component;
