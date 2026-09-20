import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ien5kkzrt.css';
import '../../css/i/ick06acne.css';
import '../../css/s/s19hw3h0x.css';
import '../../css/f/f5ld_vbuy.css';
import '../../css/e/ehbd358_y.css';
import '../../css/u/uroi5503t.css';
import '../../css/k/kmjg0sbtg.css';
import '../../css/h/h9o2onb8i.css';
import '../../css/m/ma4nqdb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ien5kkzrt"/><circle class="ick06acne"/><circle class="s19hw3h0x"/><circle class="f5ld_vbuy"/><circle class="ehbd358_y"/><circle class="uroi5503t"/><circle class="kmjg0sbtg"/><circle class="h9o2onb8i"/><circle class="ma4nqdb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:grapes"} {...others} />);
}

export default Component;
