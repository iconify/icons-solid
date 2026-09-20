import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.d2kvgvbvc {
  fill-rule: evenodd;
}

.gqwn3jbzw {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.79 22.27c-.74.28-1.98.5-3.08.5c-3.43 0-5.62-2.3-5.62-6.73c0-4.77 2.55-6.86 5.6-6.86c1.34 0 2.36.3 3.07.63l.88-3.92a10 10 0 0 0-4.23-.77c-5.46 0-10.4 3.6-10.4 11.2c0 5.87 3.18 10.57 9.9 10.57c2.1 0 3.74-.39 4.48-.72zm3.37 4.34H27V5.4h-4.84z");
}

.rt4e10b2r {
  fill: var(--svg-color--e44041, #e44041);
  d: path("M2 2h28v28H2z");
}
</style><g class="d2kvgvbvc"><path class="rt4e10b2r"/><path class="gqwn3jbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-styleci"} {...others} />);
}

export default Component;
