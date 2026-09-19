import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/eotu-utgh.css';
import '../../css/w/wx1ng0jbd.css';
import '../../css/y/yuy95221j.css';
import '../../css/t/tyw9ksbjz.css';
import '../../css/i/i2omvzqbx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="eotu-utgh"/><path class="wx1ng0jbd"/><path class="yuy95221j"/><path class="tyw9ksbjz"/><path class="i2omvzqbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:thermos-cup"} {...others} />);
}

export default Component;
