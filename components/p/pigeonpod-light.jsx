import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elg8rhbmi.css';
import '../../css/r/rk-ri1bqz.css';
import '../../css/b/bivwwb2cw.css';
import '../../css/c/cpztshyvx.css';
import '../../css/r/rxv6fxb8e.css';
import '../../css/s/s8zl27fca.css';
import '../../css/b/bn3v3rkcv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="elg8rhbmi"/><path class="rk-ri1bqz"/><path class="bivwwb2cw"/><path class="cpztshyvx"/><path class="rxv6fxb8e"/><path class="s8zl27fca"/><path class="bn3v3rkcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pigeonpod-light"} {...others} />);
}

export default Component;
