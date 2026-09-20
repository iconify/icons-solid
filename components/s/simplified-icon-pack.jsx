import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fmn8yub-d {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gw0zvbctr {
  d: path("M22.971 18.299c7.665-.636 15.885 1.604 22.442 5.935");
}

.rs-j0qbjd {
  d: path("M45.5 24A21.5 21.5 0 0 1 24 45.5A21.5 21.5 0 0 1 2.5 24A21.5 21.5 0 0 1 24 2.5A21.5 21.5 0 0 1 45.5 24");
}

.sztf1qbgd {
  d: path("M2.589 25.019c6.435-4.659 17.817-8.846 26.418-4.502c7.192 3.631 12.375 11.422 8.416 20.153");
}

.u0p7kgbix {
  d: path("M16.681 3.784c-3.763 2.03-4.864 3.915-4.822 6.066c.069 3.568 6.564 6.831 13.152 9.275");
}
</style><g class="fmn8yub-d"><path class="rs-j0qbjd"/><path class="sztf1qbgd"/><path class="u0p7kgbix"/><path class="gw0zvbctr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simplified-icon-pack"} {...others} />);
}

export default Component;
