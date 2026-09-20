import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lphvcgben.css';
import '../../css/m/m2r9rjb4e.css';
import '../../css/o/o7yyb8b0j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lphvcgben"/><path class="m2r9rjb4e"/><path class="o7yyb8b0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-file-star-bold"} {...others} />);
}

export default Component;
