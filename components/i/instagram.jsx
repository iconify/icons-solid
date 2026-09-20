import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r74_oja1e.css';
import '../../css/d/d267sib8p.css';
import '../../css/w/w13gqbpqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r74_oja1e"/><path class="d267sib8p"/><path class="w13gqbpqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:instagram"} {...others} />);
}

export default Component;
