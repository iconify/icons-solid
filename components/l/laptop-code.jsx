import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7wp6fi0u.css';
import '../../css/x/xe2sc8z7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7wp6fi0u"/><path class="xe2sc8z7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:laptop-code"} {...others} />);
}

export default Component;
