import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inl2g9ceq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="inl2g9ceq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:keyboard"} {...others} />);
}

export default Component;
