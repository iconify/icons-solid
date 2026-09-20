import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak2f22bpw.css';
import '../../css/r/ra-_foy0c.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/v/vvlaeog3m.css';
import '../../css/d/dr-vf7yak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ak2f22bpw"/><path class="ra-_foy0c"/><g class="av3m8fbrw"><path class="vvlaeog3m"/><path class="dr-vf7yak"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:discount-list"} {...others} />);
}

export default Component;
