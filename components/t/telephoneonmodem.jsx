import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak15axbuu.css';
import '../../css/t/ts-aieb2i.css';
import '../../css/i/i2_8gubfl.css';
import '../../css/b/b5czi7wft.css';
import '../../css/f/fjfqacvre.css';
import '../../css/h/hg36tbc2a.css';
import '../../css/f/f8bdrkb6y.css';
import '../../css/z/zstptq8zb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ak15axbuu"/><path class="ts-aieb2i"/><path class="i2_8gubfl"/><path class="b5czi7wft"/><circle class="fjfqacvre"/><circle class="hg36tbc2a"/><circle class="f8bdrkb6y"/><path class="zstptq8zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:telephoneonmodem"} {...others} />);
}

export default Component;
