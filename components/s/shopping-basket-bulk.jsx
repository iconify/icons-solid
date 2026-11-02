import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.mi0xogusi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.03 10.243A.998.998 0 0 1 4 9h16a.998.998 0 0 1 .97 1.243l-2 8c-.178.713-.52 1.382-1.043 1.905c-.511.511-1.195.852-1.927.852H8c-.732 0-1.416-.341-1.927-.852c-.523-.523-.865-1.192-1.043-1.905Z");
}

.yn6zku7qr {
  d: path("M8.168 3.445a1 1 0 0 1 1.664 1.11L6.869 9h10.262l-2.963-4.445a1 1 0 0 1 1.664-1.11L19.535 9H21a1 1 0 0 1 0 2h-6v9a1 1 0 0 1-2 0v-9h-2v9a1 1 0 0 1-2 0v-9H3a1 1 0 0 1 0-2h1.465Z");
}
</style><g class="cuyn6tgcc"><path class="mi0xogusi"/><path class="yn6zku7qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-basket-bulk"} {...others} />);
}

export default Component;
