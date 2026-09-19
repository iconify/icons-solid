import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2qwyvvft.css';
import '../../css/k/kxxy24ymj.css';
import '../../css/f/fqylq0b2v.css';
import '../../css/l/lbn781o5h.css';
import '../../css/d/d6_tw3xoa.css';
import '../../css/g/gfghb3jzg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiPCPhdLF"><g class="ft5dv1b6b"><path class="n2qwyvvft"/><path class="kxxy24ymj"/><circle class="fqylq0b2v"/><path class="lbn781o5h"/><circle class="d6_tw3xoa"/><circle class="gfghb3jzg"/></g></mask></defs><path mask="url(#SVGiPCPhdLF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby-app"} {...others} />);
}

export default Component;
