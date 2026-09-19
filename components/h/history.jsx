import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwkbxxb3f.css';
import '../../css/f/fkq9d_i7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwkbxxb3f"/><path class="fkq9d_i7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:history"} {...others} />);
}

export default Component;
